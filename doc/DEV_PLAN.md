This app is intended to run through the following progression of branches to get to it's final objective


| branch-name | description| test |
| - | - | - |
| `master` | initial setup from vp-starter, plus my tweaks | lighthouse; adequate to my idea of vp-starter |
| `to-firebase` | deploys to firebase | works as deployed |
| `to-views` | minimu 5 views added | each view visible, but no routing to same |
| `to-routing` | rdx added, only routing to views implemented | can now click to any view |
| `add-mwc` | mwc added as appropriate | approx 85% of reasonable expectations are mwc controls |
| `add-rdx-models` | rdx added as minimal set of example | each view now has reasonable redux functionality |
| `add-auth` | firebase auth added google, email, phone | each tests independently of the other |
| `add-tests` | retrofit with standard OWC testing | per most rudimentary functionality expectations only|

## Reasonable expectations from any branch:

- passes lighthouse tests with 100 across the board
- smallest possible footprint and measured/calibrated as Simon would
- UX opportunities identified and documunted at each step of the way
- Should this branch be considered for vp-starter as minimum base app?
- Along the way develop a logic structure for vp-starter and subractive vs additive approach
- Along the way develop documentation for training future team members