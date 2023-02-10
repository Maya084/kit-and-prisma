import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        articles: await prisma.article.findMany()
    }
};

import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { prisma } from "../../lib/server/prisma"


export const actions: Actions = {
    deleteArticle: async ({ url }) => {
        const id = url.searchParams.get('id');
        if (!id) {
            return fail(400, { message: 'invalid request' })
        };

        try {
            await prisma.article.delete({
                where: {
                    id: Number(id)
                }
            });
        } catch (error) {
            console.error('delete article:', error);
            return fail(500, { message: 'cant delete article' })
        }


        return {
            status: 200
        }
    }
};