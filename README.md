# OceanEmbed Frontend — SIH 2026

A polished, non-generic marine observatory dashboard designed around the supplied North Indian Ocean temperature pipeline.

## Run
Open `index.html` directly in a browser.

## Connect to the Python/DL backend
The current UI uses realistic demo values so it works immediately as a static prototype.

Recommended API endpoints:
- GET /api/health
- GET /api/metadata
- GET /api/temperature?date=2021-06-23&depth=100
- GET /api/profile?lat=15&lon=65
- GET /api/sub-basins
- POST /api/predict

The frontend already has the UI states needed for:
- date selection
- depth switching
- coordinate inspection
- surface-variable summaries
- 15-level vertical profiles
- regional comparison
- tensor/model status
