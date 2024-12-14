import React, { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        const canvas = document.getElementById("dnaCanvas");
        const ctx = canvas.getContext("2d");

        // Set canvas to full screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // DNA strand properties
        const dnaStrands = [];
        const strandCount = 20;
        const strandSpacing = canvas.width / strandCount;

        // Helper function to create random DNA beads
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        // Helper function to draw a bead
        function drawBead(x, y, color) {
            const beadRadius = 6;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, beadRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        // DNA Strand Class
        class DNA {
            constructor(x, color) {
                this.x = x; // X position
                this.color = color; // Bead color
                this.time = 0; // Time variable for sine wave
            }

            draw() {
                const amplitude = 50; // Height of sine wave
                const frequency = 0.02; // Speed of wave

                for (let y = 0; y < canvas.height; y += 20) {
                    // Calculate sine wave movement
                    const offsetX = amplitude * Math.sin(this.time + y * frequency);

                    // Draw left and right beads
                    drawBead(this.x + offsetX, y, this.color);
                    drawBead(this.x - offsetX, y, this.color);
                }
            }

            update() {
                this.time += 0.05; // Controls wave speed
            }
        }

        // Initialize DNA strands
        for (let i = 0; i < strandCount; i++) {
            dnaStrands.push(
                new DNA(
                    i * strandSpacing + strandSpacing / 2,
                    `hsl(${random(0, 360)}, 80%, 60%)` // Random color hues
                )
            );
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update each DNA strand
            dnaStrands.forEach((strand) => {
                strand.draw();
                strand.update();
            });

            requestAnimationFrame(animate);
        }

        // Resize canvas dynamically
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        animate();
    }, []);

    return (
        <div>
            <canvas id="dnaCanvas"></canvas>
            <div className="content">
                <h1>Dynamic DNA Background</h1>
                <p>Discover health and ancestry insights while keeping your data secure.</p>
                <button>Upload Your DNA</button>
            </div>
        </div>
    );
};

export default Test;
