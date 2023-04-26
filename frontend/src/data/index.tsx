export function headers() {
    return {
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
    }
}
