function FindProxyForURL(url, host) {
  if (isInNet(host, "216.58.207.46", 255)) return "DIRECT";

  // All other requests go through port 8080 of proxy.example.com.
  // should that fail to respond, go directly to the WWW:
  return "PROXY 172.25.102.17:9999; DIRECT";
}
