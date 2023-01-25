export const mount = document.querySelector('.mount')
export const unmount = document.querySelector('.unmount')
export const run = document.querySelector('.run')
export const step = document.querySelector('.step')
export const back = document.querySelector('.back')

export const utils = {
    freeze() {
        mount.disabled = true
        unmount.disabled = true
        run.disabled = true
        step.disabled = true
        back.disabled = true
    },

    unFreeze() {
        mount.disabled = false
        unmount.disabled = false
        run.disabled = false
        step.disabled = false
        back.disabled = false
    }
}
