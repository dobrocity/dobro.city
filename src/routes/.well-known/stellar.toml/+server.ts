import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `# POPUPCITY

NETWORK_PASSPHRASE="Public Global Stellar Network ; September 2015"

SIGNING_KEY="GDJSY7FCYCIPF5VRFV3H7QLLWH4F2MFQXSXNZQKH35J57AFKI4276QDF"

ACCOUNTS=[
"GDJSY7FCYCIPF5VRFV3H7QLLWH4F2MFQXSXNZQKH35J57AFKI4276QDF",
]

VERSION="2.1.0"

[DOCUMENTATION]
ORG_URL="https://methodology.city"
ORG_DBA="POPUPCITY"
ORG_NAME="POPUPCITY"
ORG_LOGO="https://methodology.city/favicon.png"
ORG_DESCRIPTION="Popup City in Montenegro"

[[CURRENCIES]]
code="LV"
issuer="GDJSY7FCYCIPF5VRFV3H7QLLWH4F2MFQXSXNZQKH35J57AFKI4276QDF"
status="live"
display_decimals=0
is_asset_anchored=false
name="LV"
desc="LV is an organization token for the Popup City in Montenegro"
image="https://methodology.city/favicon.png"
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/toml",
    },
  })
}
