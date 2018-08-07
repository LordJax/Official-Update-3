Write-Host "[OGBot]: Checking OGBot system..."
If (Test-Path ".\shard.js") {
  Write-Host "[OGBot]: System check successful."
  Write-Host

  Write-Host "[OGBot]: Booting up..."
  Write-Host "[OGBot]: OGBot is starting..."
  Write-Host

  node -r ./utils/globals.js .
}
Else {
  Write-Host "[OGBot]: System check failed."
  Write-Host
}
Write-Host
