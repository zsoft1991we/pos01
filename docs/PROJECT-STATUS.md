# Warung Bahagia POS — Project Status

## Baseline

- Release: **V1.0**
- Current UI build: **v22**
- Repository branch: `main`
- Main application file: `warung-bahagia-demo-supabase-final-v22.html`

## Scope V1.0

The baseline includes the operational POS flow, product and stock management, payment processing, transaction history, reporting, stock analysis, automatic insights, configurable tax, and configurable warung name.

## Backend

- Platform: Supabase
- Project: `zsoftwe-pos`
- Frontend authentication: Supabase Auth
- Operational data: Supabase PostgreSQL

## Important Settings

The application stores the configurable warung name in the `settings` table using the `business_name` key. The tax configuration is also stored in `settings`.

## Development Rule

Treat V1.0 as the stable baseline. Future changes should use a new version/build number and should be tested before replacing the baseline.
