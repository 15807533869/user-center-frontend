import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {BAIDU_LINK, GITHUB_ME} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = 'morty出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Chong',
          title: '冲哥闺房',
          href: BAIDU_LINK,
          blankTarget: true,
        },
        {
          key: 'Long',
          title: '龙哥闺房',
          href: BAIDU_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Morty_GitHub</>,
          href: GITHUB_ME,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
