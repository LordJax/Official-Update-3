$caption = "[OGBot]: Hello, $env:UserName!
 "
$description = "[OGBot]: Select the option you would like to perform.
 "

$choices = New-Object Collections.ObjectModel.Collection[Management.Automation.Host.ChoiceDescription]
$choices.Add((
  New-Object Management.Automation.Host.ChoiceDescription `
    -ArgumentList `
      "&Start OGBot",
      "Start OGBot and keep it running until you close the terminal."
))

$choices.Add((
  New-Object Management.Automation.Host.ChoiceDescription `
    -ArgumentList `
      "&Exit",
      "Exit this script.
      "
))


$selection = $host.ui.PromptForChoice($caption, $description, $choices, -1)
Write-Host

switch($selection) {
  0 {
    .\scripts\powershell\Start.ps1
  }
  1 {
    
  }
  2 {
    
  }
  3 {
    EXIT
  }
}
