export default defineAppConfig({
    ui: {
        primary: 'yellow',
        notifications: {
            position: 'top-0 bottom-auto'
        },
        button: {
            rounded: 'rounded-none',
            default: {
                size: 'lg',
            }
        }
    },
    auth: {
        redirect: {
            login: '/login',
            register: '/register',
            root: '/',
        }
    }
})
