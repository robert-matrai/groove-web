export default function CustomNotification(params) {
  const options = {
    // icon: "/logo.png",
    body: params.body,
    tag: params.currentSet,
    requireInteraction: true,
    vibrate: [200, 100, 200],
  };
  new Notification(params.title, options);
}
