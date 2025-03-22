import { z } from 'zod';
import 'dotenv/config';

class EnvConfig {
  private schema = z.object({
    PORT: z.coerce.number().positive().max(65535)
  });

  public env: z.infer<typeof this.schema>;

  constructor() {
    const result = this.schema.safeParse(process.env);
    if (!result.success) {
      process.exit(1);
    }
    this.env = result.data;
  }
}

export default new EnvConfig().env;
