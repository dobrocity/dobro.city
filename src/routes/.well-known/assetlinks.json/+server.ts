import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `
  [
  {
    "relation": [
      "delegate_permission/common.handle_all_urls",
      "delegate_permission/common.get_login_creds"
    ],
    "target": {
      "namespace": "android_app",
      "package_name": "com.soneso.passkey.example",
      "sha256_cert_fingerprints": [
        "47:11:22:F9:69:9F:11:6A:AB:B1:AA:0A:18:62:19:DD:99:0A:0A:A6:85:13:3A:F1:FA:53:B3:07:C6:DE:C6:2F"
      ]
    }
  }
]
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
    },
  })
}
