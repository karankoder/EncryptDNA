// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import "fhevm/lib/TFHE.sol";
import { SepoliaZamaFHEVMConfig } from "fhevm/config/ZamaFHEVMConfig.sol";
import "hardhat/console.sol";  
/// @title GenomicDataManager
/// @notice A smart contract for securely managing genetic data like 23andMe
/// @dev This contract uses Fully Homomorphic Encryption (FHE) for confidentiality

contract DNAEncryption is SepoliaZamaFHEVMConfig {
    struct GenomicData {
        euint64 traitRisk; // Encrypted trait risk percentage (e.g., 45%)
        ebool isCarrier;   // Encrypted boolean indicating if the user is a carrier for a condition
    }

    mapping(address => GenomicData) private userGenomicData;


    /// @notice Event emitted when a user's genetic data is added
    /// @param user The address of the user
    event GenomicDataAdded(address indexed user);

    /// @notice Event emitted when genomic insights are processed
    /// @param user The address of the user
    /// @param encryptedRisk The processed encrypted risk percentage
    event GeneticInsightProcessed(address indexed user, euint64 encryptedRisk);

    /// @notice Event emitted when an integer is encrypted
    /// @param sender The address of the caller
    /// @param plaintext The plaintext integer that was encrypted
    /// @param encryptedValue The encrypted equivalent of the plaintext integer
    event IntegerEncrypted(address indexed sender, uint64 plaintext, euint64 encryptedValue);

    /// @notice Event emitted when two encrypted values are compared
    /// @param sender The address of the caller
    /// @param value1 First encrypted value
    /// @param value2 Second encrypted value
    /// @param isEqual Result of equality comparison (encrypted boolean)
    /// @param isGreater Result of greater-than comparison (encrypted boolean)
    event EncryptedValuesCompared(
        address indexed sender,
        euint64 value1,
        euint64 value2,
        ebool isEqual,
        ebool isGreater
    );

    /// @notice Allows a user to store their encrypted genomic data
    /// @param encryptedTraitRisk Encrypted percentage risk for a specific trait
    /// @param encryptedIsCarrier Encrypted carrier status (true/false)
    function addGenomicData(euint64 encryptedTraitRisk, ebool encryptedIsCarrier) public {
        GenomicData memory data = GenomicData({
            traitRisk: encryptedTraitRisk,
            isCarrier: encryptedIsCarrier
        });

        userGenomicData[msg.sender] = data;

        emit GenomicDataAdded(msg.sender);
    }

    /// @notice Computes a genetic insight for the user based on their genomic data
    /// @param multiplier A scalar multiplier to adjust risk percentage (e.g., lifestyle factor)
    /// @return encryptedAdjustedRisk Encrypted adjusted risk percentage
    function processGeneticInsights(euint64 multiplier) public returns (euint64 encryptedAdjustedRisk) {
        GenomicData memory data = userGenomicData[msg.sender];
        require(TFHE.isSenderAllowed(data.traitRisk), "Unauthorized access to genomic data");

        // Adjust the risk percentage using the multiplier
        encryptedAdjustedRisk = TFHE.mul(data.traitRisk, multiplier);

        // Register the adjusted risk to allow further operations
        TFHE.allowThis(encryptedAdjustedRisk);
        TFHE.allow(encryptedAdjustedRisk, msg.sender);

        emit GeneticInsightProcessed(msg.sender, encryptedAdjustedRisk);

        return encryptedAdjustedRisk;
    }

    /// @notice Retrieves the user's encrypted genomic data
    /// @return encryptedTraitRisk Encrypted risk percentage
    /// @return encryptedIsCarrier Encrypted carrier status
    function getGenomicData() public view returns (euint64 encryptedTraitRisk, ebool encryptedIsCarrier) {
        GenomicData memory data = userGenomicData[msg.sender];
        return (data.traitRisk, data.isCarrier);
    }

    

    /// @notice Encrypts an integer and returns the encrypted value
    /// @param plaintext The integer to encrypt
    /// @return encryptedValue The encrypted equivalent of the integer
    function encryptInteger(uint64 plaintext) public returns (euint64 encryptedValue) {
        require(plaintext > 0, "Input must be greater than 0"); // Debugging check
        encryptedValue = TFHE.asEuint64(plaintext); // Encrypt the input
        TFHE.allowThis(encryptedValue); // Register the encrypted value
        TFHE.allow(encryptedValue, msg.sender);
        // Emit the IntegerEncrypted event
        emit IntegerEncrypted(msg.sender, plaintext, encryptedValue);
        return encryptedValue;
    }
    

    /// @notice Compares two encrypted values and emits the results
    /// @param value1 First encrypted value
    /// @param value2 Second encrypted value
    /// @return isEqual True if the values are equal, encrypted boolean
    /// @return isGreater True if the first value is greater, encrypted boolean
    function compareEncryptedValues(euint64 value1, euint64 value2)
        public
        returns (ebool isEqual, ebool isGreater)
    {
        // Perform encrypted comparisons
        isEqual = TFHE.eq(value1, value2);
        isGreater = TFHE.gt(value1, value2);

        // Allow usage of the encrypted results
        TFHE.allowThis(isEqual);
        TFHE.allow(isEqual, msg.sender);
        TFHE.allowThis(isGreater);
        TFHE.allow(isGreater, msg.sender);

        // Emit the comparison results
        emit EncryptedValuesCompared(msg.sender, value1, value2, isEqual, isGreater);

        return (isEqual, isGreater);
    }

}
