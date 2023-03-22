export const goToLoginPage = (navigator) => {
    navigator(`/`)
}

export const goToSignupPage = (navigator) => {
    navigator("/signup")
}

export const goToPostsPage = (navigator) => {
    navigator("/feed")
}

export const goToCommentsPage = (navigator, postId) => {
    navigator(`/comments/${postId}`)
}