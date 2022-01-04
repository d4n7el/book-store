import Title from '../../../infraestructura/components/title';
import BlogCard from '../components/blogCard';
import img1 from '../../../infraestructura/assets/b1.jpg';
import img2 from '../../../infraestructura/assets/b2.jpg';

import '../style/index.scss';

const BlogView = () => {
  return (
    <div className="container-blog" id="Blog">
      <Title title={'From Our Blog'} className="center" />
      <div className="container-cards">
        <div className="content-cards">
          <BlogCard
            image={img1}
            txtButton="19 January 2021"
            title="Eius, dolor? vel velit sed doloremque"
            actions={['Read More']}
            msg="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod "
          />
          <BlogCard
            image={img2}
            txtButton="19 January 2021"
            title="Eius, dolor? vel velit sed doloremque"
            actions={['Read More']}
            msg="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod "
          />
        </div>
      </div>
    </div>
  );
};

export default BlogView;
