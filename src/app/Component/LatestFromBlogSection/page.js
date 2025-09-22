// import React from 'react';

// function LatestFromBlogSection() {
//   const blogPosts = [
//     {
//       imageUrl: 'http://127.0.0.1:5500/images/react-blog1.png',
//       date: '12 March 21',
//       readTime: '5 Min Read',
//       title: 'Latest Trends & Innovations',
//       excerpt: 'EStay ahead with the newest features, tools, and best practices in React Native development.',
//     },
//     {
//       imageUrl: 'http://127.0.0.1:5500/images/react3.png',
//       date: '12 March 21',
//       readTime: '5 Min Read',
//       title: 'Expert Tips & Guides',
//       excerpt: 'Learn from our in-depth tutorials, performance optimization hacks, and real-world case studies.',
//     },
//     {
//       imageUrl: 'http://127.0.0.1:5500/images/react-blog2.png',
//       date: '12 March 21',
//       readTime: '5 Min Read',
//       title: 'Powerful & Scalable Apps',
//       excerpt: 'High-performance React Native apps for iOS & Android with a single codebase.',
//     },
//   ];

//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8">
//           <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Latest From Blog</span>
//           <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
//             Read stories, tips, and our opinions on everything
//           </h2>
//           <p className="mt-3 text-lg text-gray-600">
//             Get updated with the latest trends in technology and know how your business can benefit from these technologies.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img
//                 src={post.imageUrl}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <div className="flex items-center text-gray-500 text-sm mb-2">
//                   <span>{post.date}</span>
//                   <span className="mx-2">•</span>
//                   <span>{post.readTime}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {post.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   {post.excerpt}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestFromBlogSection;