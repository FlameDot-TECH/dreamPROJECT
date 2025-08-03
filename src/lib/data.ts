export const siteConfig = {
  title: '追梦一班 (dreamClass1)',
  welcomeLetter: {
    title: '致 追梦一班全体成员的一封信',
    content: `亲爱的追梦一班的每一位成员，\n\n欢迎来到我们的班级网站！\n\n这里是我们共同的数字家园，记录我们的点滴成长，分享我们的欢声笑语。愿这个小小的网站，能成为我们青春岁月里一个温暖的角落，见证我们的友谊与梦想。\n\n让我们一起，继续追梦！`,
  },
  navLinks: [
    { name: '班级介绍', href: '#class-intro' },
    { name: '成员风采', href: '#member-showcase' },
    { name: '美丽教师', href: '#teacher-showcase' },
  ],
  hero: {
    title: '追梦一班',
    subtitle: '星辰大海，我们来日方长',
  },
  classIntro: {
    id: 'class-intro',
    title: '班级介绍 (Class Introduction)',
    description: '追梦一班是一个充满活力、团结友爱的集体。我们来自五湖四海，怀揣着各自的梦想，在这里相遇。我们共同学习，共同进步，用汗水和智慧书写着属于我们的青春篇章。',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'classroom students',
  },
  memberShowcase: {
    id: 'member-showcase',
    title: '成员风采 (Member Showcase)',
    description: '每一位同学都是班级里最闪亮的星星，他们或勤奋好学，或多才多艺，或热心助人。在这里，你将看到他们最真实、最可爱的一面。',
    members: [
      { name: '张三', role: '班长', image: 'https://placehold.co/300x300.png', dataAiHint: 'student portrait' },
      { name: '李四', role: '学习委员', image: 'https://placehold.co/300x300.png', dataAiHint: 'student portrait' },
      { name: '王五', role: '体育委员', image: 'https://placehold.co/300x300.png', dataAiHint: 'student portrait' },
      { name: '赵六', role: '文艺委员', image: 'https://placehold.co/300x300.png', dataAiHint: 'student portrait' },
      { name: '孙七', role: '生活委员', image: 'https://placehold.co/300x300.png', dataAiHint: 'student portrait' },
      { name: '周八', role: '宣传委员', image: 'https://placehold.co/300x300.png', dataAiHint: 'student portrait' },
    ],
  },
  teacherShowcase: {
    id: 'teacher-showcase',
    title: '美丽教师 (Beautiful Teachers)',
    description: '我们的成长离不开老师们的辛勤教诲和悉心关怀。她们是知识的传授者，更是我们人生的引路人。',
    teachers: [
      { name: '刘老师', subject: '班主任 & 语文', image: 'https://placehold.co/400x400.png', dataAiHint: 'teacher portrait' },
      { name: '陈老师', subject: '数学', image: 'https://placehold.co/400x400.png', dataAiHint: 'teacher portrait' },
      { name: '李老师', subject: '英语', image: 'https://placehold.co/400x400.png', dataAiHint: 'teacher portrait' },
    ],
  },
  footer: {
    text: '技术支持：追梦 PROJECT (dreamPROJECT)',
  },
};
