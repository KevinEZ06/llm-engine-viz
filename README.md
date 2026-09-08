# llm-engine-viz

交互式 LLM 推理可视化：RadixAttention、Paged KV Cache、PD 分离、EAGLE-3 等。浏览器打开即可，无需 GPU。

在线入口：https://kevinez06.github.io/llm-engine-viz/

本作品采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。

## 页面

| 页面 | 讲什么 |
|------|--------|
| [index.html](https://kevinez06.github.io/llm-engine-viz/) | RadixAttention 前缀树、加锁、LRU |
| [eagle_3.html](https://kevinez06.github.io/llm-engine-viz/eagle_3.html) | EAGLE-3 推测解码（自动） |
| [TreeAttention.html](https://kevinez06.github.io/llm-engine-viz/TreeAttention.html) | EAGLE-3 手动步进 |
| [PagedAttention.html](https://kevinez06.github.io/llm-engine-viz/PagedAttention.html) | Paged KV Cache |
| [cacheschedule.html](https://kevinez06.github.io/llm-engine-viz/cacheschedule.html) | KV 调度：Swap / Recompute |
| [kvpd.html](https://kevinez06.github.io/llm-engine-viz/kvpd.html) | PD 分离 + KVPoll |
| [pipeline.html](https://kevinez06.github.io/llm-engine-viz/pipeline.html) | SMG 路由打分 |
| [k8s.html](https://kevinez06.github.io/llm-engine-viz/k8s.html) | K8s + Mooncake |
| [ring_attention.html](https://kevinez06.github.io/llm-engine-viz/ring_attention.html) | Ring Attention / CP |

本地打开：克隆仓库后用浏览器直接打开对应 `.html`。部分页面会从 CDN 加载 React / Tailwind，需要联网。
