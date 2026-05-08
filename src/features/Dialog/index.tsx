"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogComponent = () => {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <section className="rounded-(--radius-card) border border-(--border-default) bg-(--surface-card) p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-(--text-primary)">Modal, Popup, Noti Demo</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Bộ base này dùng Radix cho hành vi chuẩn a11y, Tailwind cho style và Sonner cho toast.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Profile Updated</DialogTitle>
                <DialogDescription>
                  Đây là dialog cơ bản. Bạn có thể đặt form, thông tin chi tiết hoặc flow nhiều bước ở đây.
                </DialogDescription>
              </DialogHeader>
              <div className="rounded-xl border border-(--border-default) bg-(--surface-subtle) p-3 text-sm text-(--text-secondary)">
                Nội dung demo: trạng thái cập nhật đã được lưu thành công.
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
                <Button onClick={() => toast.success("Saved successfully")}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Xác nhận xóa dữ liệu</AlertDialogTitle>
                <AlertDialogDescription>
                  Hành động này không thể hoàn tác. Hệ thống sẽ xóa item vĩnh viễn khỏi danh sách.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Hủy</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    toast.error("Item was deleted");
                  }}
                >
                  Xóa
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button
            variant="outline"
            onClick={() => {
              toast("Heads up", {
                description: "Đây là toast notification cơ bản.",
              });
            }}
          >
            Show Toast
          </Button>
        </div>
      </section>
    </main>
  );
};

export default DialogComponent;
