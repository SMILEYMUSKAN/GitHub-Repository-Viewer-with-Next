export interface RepoDetailsInterface  {
    name:string,
    visibility:string,
     html_url:string,
      created_at:string,
       default_branch:string,
        owner:{
            login:string,
            avatar_url:string
        }
}

export interface RepoProps{
    params:{
        username:string,
        repoName:string
    }
}

