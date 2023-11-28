function palindrome(str)
{
    str = str.replace(/[W_]+/g, "").replace(/\s/, "").toLowerCase()
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] != str[str.length - 1 - i])
        {
            return false
        }
    }
    return true
}

let check = palindrome("eye")
console.log(check)