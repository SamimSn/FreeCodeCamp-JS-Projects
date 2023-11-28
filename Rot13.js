function rot13(str)
{

    let result = []

    let words = str.split(" ")

    for (let i = 0; i < words.length; i++)
    {
        let nonWord = words[i].match(/\W/g)
        if (nonWord != null)
        {
            let punc = words[i][words[i].length - 1]
            words[i] = words[i].slice(0, words[i].length - 1)
            result.push(rot(words[i]) + punc)
        }
        else
        {
            result.push(rot(words[i]))
        }

    }

    return result.join(" ")

}

function rot(x)
{
    let result = ""
    for (let i = 0; i < x.length; i++)
    {
        if (x[i].charCodeAt(0) + 13 <= 90)
        {
            result += String.fromCharCode(x[i].charCodeAt(0) + 13)
        }
        else
        {
            result += String.fromCharCode(64 + ((x[i].charCodeAt(0) + 13) % 90))
        }
    }
    return result
}

console.log(rot13("SERR YBIR?"))