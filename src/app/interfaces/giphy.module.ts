export interface IGiphy {
    data: Giphy[]
}
  
export interface Giphy {
    type: string;
    id: string;
    url: string;
    title: string;
    images:[
        downsized:[
            url: string
        ]
    ]
}

