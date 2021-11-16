const defaultPort = 4000;

interface Environment {
  port: number|string;
  secret: string;
}

export const environment: Environment = {
  port: process.env.PORT || defaultPort,
  secret: process.env.SECRET || 'n0h4ys3cr3t0'
};
