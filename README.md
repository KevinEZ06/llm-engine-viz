# llm-engine-viz

交互式 LLM 推理可视化：RadixAttention、Paged KV Cache、PD 分离、EAGLE-3、Ring Attention 等。浏览器打开即可，无需 GPU、无需构建。

**在线入口：** https://kevinez06.github.io/llm-engine-viz/

本作品采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。

## 页面

建议顺序：缓存与注意力 → 推测解码 → 调度与部署。

| 页面 | 讲什么 |
|------|--------|
| [index.html](https://kevinez06.github.io/llm-engine-viz/) | RadixAttention：前缀树、节点加锁、LRU 淘汰 |
| [PagedAttention.html](https://kevinez06.github.io/llm-engine-viz/PagedAttention.html) | Paged KV Cache：逻辑块与物理页 |
| [cacheschedule.html](https://kevinez06.github.io/llm-engine-viz/cacheschedule.html) | KV 调度：Swap / Recompute 抢占 |
| [eagle_3.html](https://kevinez06.github.io/llm-engine-viz/eagle_3.html) | EAGLE-3 推测解码（自动播放） |
| [eagle3.html](https://kevinez06.github.io/llm-engine-viz/eagle3.html) | EAGLE-3 树注意力与验证流水线（手动步进） |
| [kvpd.html](https://kevinez06.github.io/llm-engine-viz/kvpd.html) | Prefill / Decode 分离 + KVPoll |
| [pipeline.html](https://kevinez06.github.io/llm-engine-viz/pipeline.html) | SMG 路由打分 |
| [k8s.html](https://kevinez06.github.io/llm-engine-viz/k8s.html) | K8s + Mooncake 全局 KV |
| [ring_attention.html](https://kevinez06.github.io/llm-engine-viz/ring_attention.html) | Ring Attention / Context Parallel |

## 本地打开

```bash
git clone https://github.com/KevinEZ06/llm-engine-viz.git
cd llm-engine-viz
python3 -m http.server 8080
```

浏览器打开 http://localhost:8080 。也可以直接双击对应 `.html`。

部分页面会从 CDN 加载 React / Tailwind，需要联网。
