export const config = {
    token: { expiresIn: '24h'},
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
    secretKey: 'mandarina'
}