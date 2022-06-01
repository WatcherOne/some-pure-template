/*****************************************************
 * author:   watcher
 * created:  2022-03-16
 * function: general method
 *****************************************************/

// 金额国际化
export function handleAmountInternation (value) {
    if (value === null || value === undefined) {
        return ''
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
