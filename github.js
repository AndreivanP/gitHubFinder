class Github {
    constructor() {
        this.client_id = '994e190239a6a7cc870d';
        this.client_secret = '2b82f05a1d08630b54979fb96faef7f63fb1b88c';
        this.repos_count = 10;
        this.repos_sort = 'created : asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}