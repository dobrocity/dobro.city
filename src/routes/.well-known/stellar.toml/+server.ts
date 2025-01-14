import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `# DOBROCITY

NETWORK_PASSPHRASE="Public Global Stellar Network ; September 2015"

SIGNING_KEY="GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR"

ACCOUNTS=[
"GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR",
]

VERSION="2.1.0"

[DOCUMENTATION]
ORG_URL="https://dobro.city"
ORG_DBA="DOBROCITY"
ORG_NAME="DOBROCITY"
ORG_LOGO="https://dobro.city/favicon.png"
ORG_DESCRIPTION="Dobro City"

[[CURRENCIES]]
code="DOBRO"
issuer="GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR"
status="live"
display_decimals=0
is_asset_anchored=false
name="DOBRO"
desc="DOBRO is an organization token for the Dobro City"
image="https://dobro.city/favicon.png"
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/toml",
    },
  })
}
