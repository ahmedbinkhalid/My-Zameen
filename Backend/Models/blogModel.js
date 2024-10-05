// Model for Creating blogs
 exports.createBlog = async (db, blogData) =>{
    const {title, content, author, images} = blogData;
    const blog ={
        title,
        content,
        author, // Bloggers id or name
        images, // Array of image urls
        status: 'pending',
        createdAt: new Date(),
    };
    const result = await db.collection('pendingblogs').insertOne(blog);
    return result;
 };

 // For getting pending blogs to show to the Admin
 exports.getPendingBlogs = async (db) =>{
    return await db.collection('pendingblogs').find({status: 'pending'}).toArray();
 };

 // For approving the blogs by Admin

 exports.approveBlog = async (db, blogId) => {
    const blog = await db.collection('pendingblogs').findOne({_id: new MongoDB.ObjectId(blogId)});
    if(blog){
        await db.collection('approvedblogs').insertOne(blog);
        await db.collection('pendingblogs').deleteOne({_id: new MongoDB.ObjectId(blogId)});
    };
 };