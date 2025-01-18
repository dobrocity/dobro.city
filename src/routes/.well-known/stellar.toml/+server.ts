import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `# DOBROCITY

NETWORK_PASSPHRASE="Public Global Stellar Network ; September 2015"

SIGNING_KEY="GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR"

ACCOUNTS=[
"GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR",
]

VERSION="2.5.0"

[[PRINCIPALS]]
name="Rinat Enikeev"
email="rinat@dobro.city"
keybase="programyzer"
telegram="programyzer"

[[PRINCIPALS]]
name="Valeriy Utrosin"
email="valeriy@dobro.city"
keybase="poutru"
telegram="poutru"

[[PRINCIPALS]]
name="Victor Korb"
email="victor@dobro.city"
keybase="KorbVV"
telegram="KorbVV"

[DOCUMENTATION]
ORG_NAME="Dobro City"
ORG_DBA="Dobro City"
ORG_URL="https://dobro.city"
ORG_LOGO="https://dobro.city/favicon.png"
ORG_DESCRIPTION="The open source, libertarian and blockchain-first Popup City"
ORG_GITHUB="dobrocity"
ORG_OFFICIAL_EMAIL="rinat@dobro.city"
ORG_SUPPORT_EMAIL="rinat@dobro.city"

[[CURRENCIES]]
code="DOBRO"
issuer="GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR"
status="live"
display_decimals=0
is_asset_anchored=false
name="DOBRO"
desc="DOBRO is an organization token for the Dobro City"
image="https://dobro.city/favicon.png"

[[CURRENCIES]]
code="KIND"
issuer="GCDOXSSA6RKZHZGI5KI2RB24UWKFTKZ2CTKXG5WBAURDDYR3CER7DOBR"
status="live"
display_decimals=0
is_asset_anchored=false
name="KIND"
desc="Kind is a donation token for the Dobro City. [EN] Terms: https://docs.dobro.city/offers/kind. [RU] Условия: https://docs.dobro.city/ru/oferty/kind. "
image="https://dobro.city/KIND.png"
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/toml",
    },
  })
}
