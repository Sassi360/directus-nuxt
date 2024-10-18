import type { NotificationColor } from '#ui/types';
const toast = useToast()

export const useShowToast = (title: string, description: string, icon: string, color: string) => {
  return toast.add({
    title,
    description,
    icon,
    color: color as NotificationColor,
    timeout: 5000,
  });
}
