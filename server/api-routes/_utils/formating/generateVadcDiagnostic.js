export const  generateVadcDiagnostic = (data) => {
  data.vadcDiagnostics = JSON.stringify({ERC: data.ERC, SUP: data.SUP, TRIGGER: data.TRIGGER})
}