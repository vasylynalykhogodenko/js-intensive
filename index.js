class DataHandler {
    constructor() {
        this.posts = new Map();
    }

    async fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            this.posts.clear();
            data.forEach((post) => this.posts.set(post.id, post));
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    listPosts() {
        return Array.from(this.posts.values()).sort((a, b) => a.title.localeCompare(b.title));
    }

    getPost(id) {
        return this.posts.get(id) || null;
    }

    clearPosts() {
        this.posts.clear();
    }
};
