import prisma from '../db';


// get all
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            product: true
        }
    })

    res.json({data: user.product})
}


// get one

export const getOneProduct = async (req, res) => {
    const id = req.params.id;

    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsTold: req.user.id
        }
    })

    res.json({data: product})
}

export const createProduct = async (req, res, next) => {
    try{

    
    const product = await prisma.product.create({
        data:{
            name: req.body.name,
            belongsTold: req.user.id
        }
    })

    res.json({data: product});
    } catch(e){
        next(e);
    }
}

export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id_belongsTold:{
                id: req.params.id,
                belongsTold: req.user.id
            }
        },
        data:{
            name: req.body.name
        }
    })

    res.json({data: updated});
}

export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsTold:{
                id: req.params.id,
                belongsTold: req.user.id
            }
        }
    })

    res.json({data: deleted})
}