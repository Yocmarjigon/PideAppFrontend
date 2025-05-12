import { JwtPayload } from "@supabase/supabase-js";

export interface PayloadCustom extends JwtPayload {
  roles?: string;
  userId?: string;
}
