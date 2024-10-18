import type { NotificationColor } from '#ui/types';

export const useShowToast = (title: string, description: string, icon: string, color: string) => {
  const toast = useToast()

  return toast.add({
    title,
    description,
    icon,
    color: color as NotificationColor,
    timeout: 5000,
  });
}
