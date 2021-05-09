{
  /* 
    Omit : 전달받은 키를 제외한 다른 key들을 출력 
    Omit : 전달받은 키를 빼버림
  */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo2(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
