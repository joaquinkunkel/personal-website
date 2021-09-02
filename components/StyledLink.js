import Link from 'next/link';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

// My little design system's styled version of next-js link.

const StyledLink = withTheme(({theme, outlined, children, href, color, target, disableBackground}) => {
  const InnerLink = styled.a`
  color: ${theme.palette[color].main};
  cursor: pointer;
  padding: 4px;
  margin: -2px;
  border-radius: 8px;
  border: ${outlined ? `1px solid ${theme.palette.divider}` : 'none'};
  transition: 0.2s all;
  background: ${!disableBackground && theme.palette.action.focus};
  &:hover {
    background: ${theme.palette.action.selected};
  };
  `;
  return (
    <Link href={href} target={target}>
      <InnerLink>
        {children}
      </InnerLink>
    </Link>
  )
});

StyledLink.defaultProps = {
  target: '_blank',
  href: '#',
  color: 'primary',
  outlined: false,
  disableBackground: false,
};

export default StyledLink;
