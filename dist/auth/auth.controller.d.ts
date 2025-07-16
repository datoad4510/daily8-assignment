import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
        name: string;
    }): Promise<{
        id: number;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
