import { Card } from 'antd';
import React from 'react';

interface AppProps {
  content?: React.ReactNode;
  bordered?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const App: React.FC<AppProps> = ({
  content = "Card",
  bordered = false,
  style,
  className,
}) => (
  <Card bordered={bordered} style={style} className={className}>
    {content}
  </Card>
);

export default App;
