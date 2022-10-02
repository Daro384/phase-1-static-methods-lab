class Formatter {
  static capitalize(string) {
    if (string.length === 1) return string.toUpperCase()
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    // return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    const allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQURSTUVWXYZ -' ".split("")
    return string.split("").filter(character => allowedCharacters.includes(character)).join("")
  }

  static titleize(string) {
    let upperString = string[0].toUpperCase() + string.slice(1) //uppercase first letter in string
    const ignoreCapital = "the, a, an, but, of, and, for, at, by, from".split(", ")
    const stringArray = upperString.split(" ")
    let titleizedSentence = stringArray.map(word => {
      if (!ignoreCapital.includes(word)) return word[0].toUpperCase() + word.slice(1)
      else return word 
    })
    return titleizedSentence.join(" ")
  }
}