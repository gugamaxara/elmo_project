export const  validateElement = (el, txt, default_text) => {
    el.value = "",
    el.placeholder = txt,
    el.style.border = "1px solid red"
    setTimeout(() => {
        el.placeholder = default_text
        el.style.border = "none"
    }, 3000)
}