import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, Check, Star, Zap } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  console.log("CheckoutModal rendered");
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-screen p-0 overflow-y-auto bg-card border-border">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-background border border-border p-2 text-foreground hover:bg-muted transition-colors shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="bg-primary text-primary-foreground px-8 py-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary-foreground/20 p-3">
              <ShoppingBag className="h-6 w-6" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 tracking-tight">
            CHECKOUT COMPLETE
          </h2>
          <p className="text-primary-foreground/80 font-light">
            Thank you for exploring our premium demo
          </p>
        </div>

        {/* Content */}
        <div className="p-8 bg-card">
          <h3 className="text-xl font-semibold mb-4 text-center text-card-foreground tracking-tight">
            Demo Experience Complete
          </h3>
          <p className="text-muted-foreground text-center mb-8 leading-relaxed font-light">
            This showcases a complete e-commerce experience built with modern
            technologies. Every detail is crafted for production-ready
            excellence.
          </p>

          {/* Feature highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-none">
              <div className="rounded-full bg-primary p-2">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-card-foreground">
                  Clean Design System
                </h4>
                <p className="text-xs text-muted-foreground">
                  Consistent, minimal aesthetic
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary rounded-none">
              <div className="rounded-full bg-primary p-2">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-card-foreground">
                  Performance Optimized
                </h4>
                <p className="text-xs text-muted-foreground">
                  Fast, responsive experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary rounded-none">
              <div className="rounded-full bg-primary p-2">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-card-foreground">
                  Production Ready
                </h4>
                <p className="text-xs text-muted-foreground">
                  Complete e-commerce features
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h4 className="font-semibold mb-2 text-card-foreground tracking-tight">
              Ready for Your Project?
            </h4>
            <p className="text-sm text-muted-foreground mb-6 font-light">
              Let's create something exceptional for your business. Modern web
              applications built to your exact specifications.
            </p>
          </div>

          <Button onClick={onClose} className="w-full btn-primary">
            CONTINUE EXPLORING
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4 font-light">
            Professional web development showcase
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
