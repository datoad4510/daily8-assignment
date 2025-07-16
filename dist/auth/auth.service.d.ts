import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(email: string, password: string, name: string): Promise<{
        id: number;
    }>;
    login(email: string, password: string): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
