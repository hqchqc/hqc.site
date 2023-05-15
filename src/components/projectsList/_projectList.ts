interface projectsType {
  projectName: string
  description: string
  repoLink: string
  previewLink: string
}

type Projects<T> = T[]

export const projects: Projects<projectsType> = [
  // {
  //   projectName: 'Hug',
  //   description: 'Use ChatGPT to relieve your frustration.',
  //   repoLink: 'https://github.com/Ekarmore/hug',
  //   previewLink: 'https://hug.ekar.site',
  // },
  {
    projectName: 'MusicPlayer',
    description: '🎧 自认为还算可以的播放器项目.',
    repoLink: 'https://github.com/hqchqc/MusicPlayer',
    previewLink: 'https://music.bagbean.cn/spotting',
  },
  {
    projectName: 'hqc.site',
    description: '👀 现在正在看的站点咯.',
    repoLink: 'https://github.com/hqchqc/hqc.site',
    previewLink: 'https://bagbean.cn',
  },
]
