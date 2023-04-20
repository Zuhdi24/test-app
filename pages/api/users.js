const users = [
    { id: 1, username: 'zuhdiali', password: '123456' },
    { id: 2, username: 'syifannisa', password: '123456' },
    { id: 3, username: 'alihisyam', password: '123456' },
    { id: 4, username: 'zuhdialihisyam', password: '123456' },
]

export default function handler(req, res) {
    res.status(200).json(users)
}