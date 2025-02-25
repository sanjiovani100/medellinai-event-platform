"use client"
import { useEffect, useRef } from "react"

type Grid = { alive: boolean; opacity: number }[][]

const GameOfLife = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const cellSize = 8
    const cols = Math.floor(canvas.width / cellSize)
    const rows = Math.floor(canvas.height / cellSize)
    const transitionSpeed = 0.15 // Controls fade speed

    let grid: Grid = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => ({
            alive: Math.random() > 0.8,
            opacity: Math.random() > 0.8 ? 0.7 : 0,
          })),
      )

    const countNeighbors = (grid: Grid, x: number, y: number): number => {
      let sum = 0
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const row = (x + i + rows) % rows
          const col = (y + j + cols) % cols
          sum += grid[row][col].alive ? 1 : 0
        }
      }
      sum -= grid[x][y].alive ? 1 : 0
      return sum
    }

    const draw = () => {
      // Use transparent background to let gradient show through
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update opacities
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = grid[i][j]
          if (cell.alive && cell.opacity < 1) {
            cell.opacity = Math.min(cell.opacity + transitionSpeed, 0.7)
          } else if (!cell.alive && cell.opacity > 0) {
            cell.opacity = Math.max(cell.opacity - transitionSpeed, 0)
          }

          if (cell.opacity > 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${cell.opacity})`
            ctx.beginPath()
            ctx.arc(
              j * cellSize + cellSize / 2,
              i * cellSize + cellSize / 2,
              2,
              0,
              Math.PI * 2,
            )
            ctx.fill()
          }
        }
      }

      const next = grid.map((row, i) =>
        row.map((cell, j) => {
          const neighbors = countNeighbors(grid, i, j)
          const willBeAlive = cell.alive
            ? neighbors >= 2 && neighbors <= 3
            : neighbors === 3
          return {
            alive: willBeAlive,
            opacity: cell.opacity,
          }
        }),
      )

      grid = next
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(draw)
      }, 150)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="mask pointer-events-none overflow-hidden select-none opacity-30">
      <canvas ref={canvasRef} width={1800} height={800} />
    </div>
  )
}

export default GameOfLife
