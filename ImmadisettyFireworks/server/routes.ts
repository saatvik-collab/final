import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      const data = insertInquirySchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      const inquiry = await storage.createInquiry(data);
      return res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/contacts", async (req: Request, res: Response) => {
    try {
      const data = insertContactSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      const contact = await storage.createContact(data);
      return res.status(201).json(contact);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Product routes for future use
  app.get("/api/products", async (_req: Request, res: Response) => {
    const products = await storage.getAllProducts();
    return res.json(products);
  });

  app.get("/api/products/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    
    const product = await storage.getProduct(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    return res.json(product);
  });

  const httpServer = createServer(app);
  return httpServer;
}
